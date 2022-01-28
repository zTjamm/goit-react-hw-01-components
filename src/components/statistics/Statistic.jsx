import PropTypes from "prop-types";
import {Section, Title, StatList, Item, Label, Percentage} from "./Statistics.styled"
export default function Statistic({ data }) {
  return (
    <Section>
      <Title>Upload stats</Title>
      <StatList>
        {data.map(
          ({id,label,percentage}) => {
            return (<Item id={id} key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
              </Item>
            );
          }
        )}
      </StatList>
    </Section>
  );
}
Statistic.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    { id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
      
     })),
     title: PropTypes.string,
};

