import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="123" y="68" rx="0" ry="0" width="0" height="1" />
      <rect x="123" y="66" rx="0" ry="0" width="0" height="1" />
      <rect x="154" y="70" rx="0" ry="0" width="0" height="1" />
      <rect x="112" y="67" rx="0" ry="0" width="0" height="2" />
      <circle cx="141" cy="143" r="140" />
      <rect x="-5" y="294" rx="3" ry="3" width="280" height="25" />
      <rect x="0" y="333" rx="5" ry="5" width="280" height="84" />
      <rect x="1" y="432" rx="0" ry="0" width="104" height="27" />
      <rect x="118" y="432" rx="0" ry="0" width="160" height="27" />
    </ContentLoader>
  );
};

export default LoadingBlock;
