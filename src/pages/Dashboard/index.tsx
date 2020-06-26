import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>
      <Repositories>
        <a href="teste">
          <img src="" alt="s2" />
          <div>
            <strong>repo</strong>
            <p>descição blablablabla</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="" alt="s2" />
          <div>
            <strong>repo</strong>
            <p>descição blablablabla</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
