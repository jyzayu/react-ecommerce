import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

const Categories = () => {
  // categories를 state가 아닌데 child component에 전달하면 props인가?  props는 전달하는 state?
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
