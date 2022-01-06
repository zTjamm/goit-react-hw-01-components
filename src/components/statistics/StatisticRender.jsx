import PropTypes from "prop-types";
import {Section, Title, StatList, Item, Label, Percentage} from "./Statistics.styled"
export default function StatisticRender({ data }) {
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
StatisticRender.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    { id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      
     })),
     
};

