import { StatisticItem } from "components";
import { StatisticsList, StatisticTitle } from "./Statistics.styled";
import { GiTreeDoor } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";

const icons = [
  <GiTreeDoor />,
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
];
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map((stat, index) => (
          // <StatisticItem key={stat.id} {...stat} />
          <StatisticItem
            key={stat.id}
            total={stat.total}
            title={stat.title}
            icon={icons[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
