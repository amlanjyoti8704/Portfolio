import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className="w-full h-[500px] md:h-[700px] 2xl:h-[80vh]"> {/* change sizes as needed */}
      <Spline scene="https://prod.spline.design/lWQbjCvdQLqLCCVC/scene.splinecode" />
    </div>
  );
}