import { useEffect, useState } from "react";
// template
import Template from "../template";
// bootstrap
import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
// api
import { Get_pokemons } from "../../services";
// components
import { PokeContainer } from "../../components";

export default function Home() {
	const [listPokemonName, setListPokemonName] = useState(null);

	useEffect(() => {
		Get_pokemons().then((res) => {
			setListPokemonName(res.data.results);
		});
	}, []);

	if (!listPokemonName) {
		return (
			<>
				<h1>No hay data</h1>
			</>
		);
	}

	return (
		<>
			<Template>
				<Row className="text-center my-2">
					<h1>Home</h1>
				</Row>
				<Row className="justify-content-center">
					<Col md="2">
						<InputGroup className="mb-3">
							<Form.Control
								placeholder="Buscar pokemon"
								aria-label="Buscar pokemon"
								aria-describedby="basic-addon2"
							/>
							<Button variant="outline-dark" id="button-addon2">
								<i className="fa-solid fa-magnifying-glass"></i>
							</Button>
						</InputGroup>
					</Col>
				</Row>
				<PokeContainer data={listPokemonName}></PokeContainer>
			</Template>
		</>
	);
}