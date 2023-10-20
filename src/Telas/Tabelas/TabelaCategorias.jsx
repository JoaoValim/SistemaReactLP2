import React, { useState } from "react";
import { Container, Form, Row, Col, Table } from "react-bootstrap";
import RenderizadorProduto from "../Renderizadores/RenderizadorProduto";

export default function TabelaCategorias(props) {
  const [categoriaValue, setCategoriaValue] = useState("A"); // Inicialize o estado categoriaValue

  const lista = JSON.parse(localStorage.getItem("produtos"));

  function mudancaSelect(event) {
    const componente = event.currentTarget;
    const novoValor = componente.value;
    setCategoriaValue(novoValor); // Atualize o estado categoriaValue com o novo valor
  }

  return (
    <Container>
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <br />
                <div className="select-cat">
                  <Form.Label>Categorias</Form.Label>
                  <Form.Select
                    aria-label="Categorias"
                    value={categoriaValue}
                    id="categoria"
                    name="categoria"
                    onChange={mudancaSelect}
                    required
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
      <Table className="table table-dark table-hover" striped bordered hover>
        <thead>
          <tr className="top-tabela">
            <th>ID</th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Tamanho</th>
            <th>Valor(R$)</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((produto) =>
            produto.categoria === categoriaValue ? (
              <RenderizadorProduto key={produto.id} produto={produto} acoes={false} />
            ) : null
          )}
        </tbody>
      </Table>
    </Container>
  );
}
