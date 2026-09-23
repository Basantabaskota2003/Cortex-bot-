import "./herocard.scss";
export const Herocard = ({
  data,
}: {
  data: {
    icon: React.JSX.Element;
    title: string;
    desc: string;
  };
}) => {
  return (
    <div className="herocard">
      <div className="herocard-content">
        <span className="herocard-icon">{data.icon}</span>
        <span className="herocard-title">{data.title}</span>
        <span className="herocard-desc">{data.desc}</span>
      </div>
    </div>
  );
};
