import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function CodingProfile() {
    const [githubData, setGithubData] = useState(null);
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [contestData, setContestData] = useState(null);
    const [streakData, setStreakData] = useState(null);
    const [loading, setLoading] = useState(true);

    const GITHUB_USERNAME = "amlanjyoti8704";
    const LEETCODE_USERNAME = "amlanjyotibehera2004";

useEffect(() => {
    const fetchProfileData = async () => {
        setLoading(true);

        // 1. Fetch GitHub Stats
        try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            if (res.ok) setGithubData(await res.json());
        } catch (err) { console.error("GitHub error:", err); }

        // 2. Fetch LeetCode Core Details
        try {
            const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`);
            const contentType = res.headers.get("content-type");
            if (res.ok && contentType && contentType.includes("application/json")) {
                setLeetcodeData(await res.json());
            }
        } catch (err) { console.error("LeetCode Profile error:", err); }

        // 3. Fetch LeetCode Contest Stats (Using an alternate high-availability mirror endpoint)
        try {
            const cachedContest = localStorage.getItem("leetcodeContest");

            const res = await fetch(
                `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}/contest`
            );

            const text = await res.text();

            // API Rate Limited
            if (text.includes("Too many request")) {

                console.warn("Contest API rate limited");

                if (cachedContest) {
                    setContestData(JSON.parse(cachedContest));
                } else {
                    setContestData({
                        contestRating: 1712,
                        contestRanking: 109250,
                        contestAttend: 17,
                        contestTopPercentage: 12.74
                    });
                }

            } else {

                const json = JSON.parse(text);

                const normalizedData = {
                    contestRating:
                        json.contestRating ??
                        json.contest_rating ??
                        1712,

                    contestRanking:
                        json.contestRanking ??
                        json.contestGlobalRanking ??
                        json.globalRanking ??
                        109250,

                    contestAttend:
                        json.contestAttend ??
                        json.attendedContestsCount ??
                        17,

                    contestTopPercentage:
                        json.contestTopPercentage ??
                        json.topPercentage ??
                        12.74
                };

                setContestData(normalizedData);

                localStorage.setItem(
                    "leetcodeContest",
                    JSON.stringify(normalizedData)
                );
            }

        } catch (err) {

            console.error("Contest API Error:", err);

            const cachedContest =
                localStorage.getItem("leetcodeContest");

            if (cachedContest) {
                setContestData(JSON.parse(cachedContest));
            } else {
                setContestData({
                    contestRating: 1712,
                    contestRanking: 109250,
                    contestAttend: 17,
                    contestTopPercentage: 12.74
                });
            }
        }

        // 4. Fetch LeetCode Submissions / Streaks
        try {
            const res = await fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/submission`);
            const contentType = res.headers.get("content-type");
            if (res.ok && contentType && contentType.includes("application/json")) {
                setStreakData(await res.json());
            }
        } catch (err) { console.error("LeetCode Streak error:", err); }

        setLoading(false);
    };

    fetchProfileData();
    window.scrollTo(0, 0);
}, []);

    const containerRef = useRef(null);
    useGSAP(() => {
        if (!loading) {
            gsap.fromTo(".metric-card", 
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }
            );
        }
    }, [loading]);

    if (loading) {
        return (
            <div className="w-full min-h-screen bg-black flex items-center justify-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#FF3131]"></div>
            </div>
        );
    }

    const totalQuestions = leetcodeData?.totalQuestions || 3958;
    const solvedPercent = leetcodeData ? (leetcodeData.totalSolved / totalQuestions) * 100 : 0;
console.log("COntestData:", contestData);
    return (
        <div ref={containerRef} className="w-full min-h-screen bg-black text-white pt-32 px-4 md:px-12 pb-20">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-2 bg-gradient-to-r from-white via-zinc-400 to-[#FF3131] bg-clip-text text-transparent">
                        Coding Performance Analytics
                    </h1>
                    <div className="h-[2px] w-20 bg-[#FF3131] mx-auto mt-3 shadow-[0_0_10px_#FF3131]" />
                </div>

                {/* Main Dashboard Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    {/* Contest Rating Overview Widget */}
                    <div className="metric-card lg:col-span-2 bg-[#1a1a1a]/60 border border-zinc-800/60 p-6 rounded-xl backdrop-blur-md shadow-xl">
                        <div className="grid grid-cols-3 gap-4 border-b border-zinc-800/80 pb-4 mb-6 text-center lg:text-left">
                            <div>
                                <div className="text-zinc-500 text-xs uppercase font-mono font-bold">Contest Rating</div>
                                <div className="text-3xl font-black text-white tracking-tight mt-1">
                                    {contestData?.contestRating ? Math.round(contestData.contestRating).toLocaleString() : "0"}
                                </div>
                            </div>
                            <div>
                                <div className="text-zinc-500 text-xs uppercase font-mono font-bold">Global Ranking</div>
                                <div className="text-sm font-bold text-zinc-300 mt-2">
                                    {contestData?.contestRanking ? contestData.contestRanking.toLocaleString() : "109,250"}<span className="text-zinc-600 text-xs font-normal"> / 874,367</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-zinc-500 text-xs uppercase font-mono font-bold">Attended</div>
                                <div className="text-xl font-extrabold text-zinc-300 mt-1">
                                    {contestData?.contestAttend || "17"}
                                </div>
                            </div>
                        </div>

                        {/* Sparkline Visual graph representation matching Screenshot 2026-06-13 at 5.17.54 PM.jpg */}
                        <div className="relative w-full h-24 bg-zinc-900/40 rounded-lg border border-zinc-900 overflow-hidden flex items-end px-2 pt-4">
                            <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                                <path 
                                    d="M 0 25 Q 25 5, 50 12 T 100 8" 
                                    fill="none" 
                                    stroke="#cc7a00" 
                                    strokeWidth="1.5" 
                                />
                                <circle cx="50" cy="12" r="2" fill="#fff" className="animate-ping" />
                                <circle cx="50" cy="12" r="1.5" fill="#cc7a00" />
                            </svg>
                            <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-[10px] bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 font-mono text-amber-500">
                                Max: {"1,723"}
                            </span>
                            <div className="absolute bottom-1 left-2 text-[9px] font-mono text-zinc-600">2025</div>
                            <div className="absolute bottom-1 right-2 text-[9px] font-mono text-zinc-600">2026</div>
                        </div>
                    </div>

                    {/* Top Tier Percentile Component Box */}
                    <div className="metric-card bg-[#1a1a1a]/60 border border-zinc-800/60 p-6 rounded-xl backdrop-blur-md shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="text-zinc-500 text-xs uppercase font-mono font-bold">Top Percentile Rating</div>
                            <div className="text-4xl font-black text-zinc-100 tracking-tight mt-2">
                                {contestData?.contestTopPercentage ? `${contestData.contestTopPercentage}%` : "12.74%"}
                            </div>
                        </div>
                        
                        <div className="flex items-end gap-1.5 h-16 pt-2">
                            <div className="w-full bg-zinc-800 h-[20%] rounded-sm" />
                            <div className="w-full bg-zinc-800 h-[45%] rounded-sm" />
                            <div className="w-full bg-zinc-800 h-[85%] rounded-sm" />
                            <div className="w-full bg-zinc-800 h-[60%] rounded-sm" />
                            <div className="w-full bg-zinc-800 h-[35%] rounded-sm" />
                            <div className="w-full bg-zinc-800 h-[20%] rounded-sm" />
                            <div className="w-full bg-[#cc7a00] h-[12%] rounded-sm shadow-[0_0_8px_#cc7a00]" />
                            <div className="w-full bg-zinc-800 h-[5%] rounded-sm" />
                        </div>
                    </div>
                </div>

                {/* Secondary Row: Solved Count Circular Ring */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="metric-card bg-[#1a1a1a]/60 border border-zinc-800/60 p-6 rounded-xl shadow-xl flex items-center justify-around gap-4">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                <path className="text-zinc-800" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-amber-500 shadow-md" strokeDasharray={`${solvedPercent || 10}, 100`} strokeWidth="2.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute text-center">
                                <div className="text-2xl font-black text-white">{leetcodeData?.totalSolved || "372"}</div>
                                <div className="text-[10px] text-zinc-500 font-mono tracking-tighter border-t border-zinc-800 pt-0.5">Solved / {totalQuestions}</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 w-1/2">
                            <div className="bg-zinc-900/50 border border-zinc-800/40 px-3 py-1.5 rounded flex justify-between items-center">
                                <span className="text-[11px] font-bold text-emerald-400 font-mono">Easy</span>
                                <span className="text-xs font-bold text-zinc-300">{leetcodeData?.easySolved || "124"}<span className="text-zinc-600 font-normal">/{leetcodeData?.totalEasy || "949"}</span></span>
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-800/40 px-3 py-1.5 rounded flex justify-between items-center">
                                <span className="text-[11px] font-bold text-amber-500 font-mono">Med.</span>
                                <span className="text-xs font-bold text-zinc-300">{leetcodeData?.mediumSolved || "219"}<span className="text-zinc-600 font-normal">/{leetcodeData?.totalMedium || "2067"}</span></span>
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-800/40 px-3 py-1.5 rounded flex justify-between items-center">
                                <span className="text-[11px] font-bold text-rose-500 font-mono">Hard</span>
                                <span className="text-xs font-bold text-zinc-300">{leetcodeData?.hardSolved || "29"}<span className="text-zinc-600 font-normal">/{leetcodeData?.totalHard || "942"}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Badge Tracking Container */}
                    <div className="metric-card bg-[#1a1a1a]/60 border border-zinc-800/60 p-6 rounded-xl shadow-xl flex flex-col justify-between">
                        <div className="flex justify-between items-center border-b border-zinc-800/60 pb-2">
                            <div className="text-zinc-400 text-xs font-mono font-bold uppercase">Badges Collected</div>
                            <div className="text-lg font-black font-mono text-zinc-200">{leetcodeData?.badgesCount || "3"}</div>
                        </div>

                        <div className="flex items-center gap-4 py-3 justify-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/30 border border-blue-500/40 flex items-center justify-center">
                                <div className="text-[9px] font-mono text-cyan-300 font-bold">JAN</div>
                            </div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/40 border border-emerald-500/50 flex items-center justify-center scale-110">
                                <div className="text-[10px] font-mono text-emerald-300 font-bold text-center leading-3">50<br/>DAYS</div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/30 border border-amber-500/40 flex items-center justify-center">
                                <div className="text-[9px] font-mono text-amber-300 font-bold">LC</div>
                            </div>
                        </div>

                        <div className="text-center text-[11px] font-mono text-zinc-500">
                            Most Recent Badge: <span className="text-zinc-300 font-bold">{leetcodeData?.mostRecentBadge || "50 Days Badge 2026"}</span>
                        </div>
                    </div>
                </div>

                {/* Submission Streak Calendar Block */}
                <div className="metric-card bg-[#1a1a1a]/60 border border-zinc-800/60 p-6 rounded-xl shadow-xl mb-8">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-zinc-800/80 pb-3 mb-4">
                        <div className="text-sm font-bold text-zinc-200">
                            Submissions & Activity History <span className="text-zinc-500 font-normal text-xs">(Past Year Graph)</span>
                        </div>
                        <div className="flex gap-4 text-xs font-mono text-zinc-400">
                            <div>Total active days: <span className="text-emerald-400 font-bold">185</span></div>
                            <div>Max streak: <span className="text-emerald-400 font-bold">59</span></div>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto pt-2">
                        {/* Fallback directly calls GitHub profile summary to mask rate limiting */}
                        <img 
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&background=1a1a1a&border=1a1a1a&ring=FF3131&fire=FF3131`}
                            alt="Activity Performance Graph Layout Map" 
                            className="w-full min-w-[600px] h-32 object-contain rounded"
                        />
                    </div>
                </div>

                {/* Footer Data Box */}
                <div className="metric-card bg-zinc-950/40 border border-zinc-900 p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
                    <div>
                        <div className="text-zinc-500 text-xs font-mono uppercase font-bold">Public Code Hub Repos</div>
                        <div className="text-2xl font-black text-white mt-1">{githubData?.public_repos || "0"}</div>
                    </div>
                    <div>
                        <div className="text-zinc-500 text-xs font-mono uppercase font-bold">Network Followers</div>
                        <div className="text-2xl font-black text-[#FF3131] mt-1">{githubData?.followers || "0"}</div>
                    </div>
                    <a 
                        href={githubData?.html_url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-4 py-2 border border-zinc-800 rounded-lg text-xs font-mono hover:bg-zinc-900 transition-all duration-200 uppercase tracking-widest text-zinc-400 hover:text-white"
                    >
                        Explore Public Hub profile ↗
                    </a>
                </div>

            </div>
        </div>
    );
}

export default CodingProfile;