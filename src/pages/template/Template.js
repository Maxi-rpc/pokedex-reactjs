import { Container, Row } from "react-bootstrap";
import { NavBarSocial, Header, Footer, SearchBar } from "../../components";

export default function Template(props) {
	const children = props.children;
	return (
		<>
			<Container fluid>
				<Row>
					<NavBarSocial></NavBarSocial>
				</Row>
				<Header></Header>
				<SearchBar></SearchBar>
				{children}
				<Row>
					<Footer></Footer>
				</Row>
			</Container>
		</>
	);
}
