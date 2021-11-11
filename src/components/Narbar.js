import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import {Badge} from '@material-ui/core';
import {mobile} from '../responsive';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: '50px'
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: '10px 0px'
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: 'center',
    flex: 2
  })}
`;

const MenuItem = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({
    fontSize: '12px',
    marginLeft: '10px'
  })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Languages = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({
    display: 'none'
  })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: '50px'
  })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: '24px'
  })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{color: 'gray', fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>WOJAK.</Logo>
          </StyledLink>
        </Center>
        <Right>
          <StyledLink to="/register">
            <MenuItem>Register</MenuItem>
          </StyledLink>
          <StyledLink to="/login">
            <MenuItem>Sign In</MenuItem>
          </StyledLink>
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
