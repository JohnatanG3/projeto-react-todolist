// Importação do styled-components para criar estilos personalizados com escopo no React
import styled from "styled-components";
// Importação de ícones da biblioteca react-icons para serem usados nos botões de tarefa
import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc';

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%); // Fundo com um gradiente linear horizontal do cinza (#383838) para o preto (#000000)
    width: 100vw; // Define a largura para 100% da janela de visualização
    height: 100vh; // Define a altura para 100% da janela de visualização
    display: flex; // Utiliza flexbox para alinhar os elementos filhos
    justify-content: center; // Centraliza os elementos horizontalmente
    align-items: center; // Centraliza os elementos verticalmente
    padding: 20px 0; // Adiciona espaçamento interno no topo e na base do container
`;

export const TodoList = styled.div`
    background: #FFFFFF; // Define um fundo branco para a lista de tarefas
    padding: 30px 20px; // Adiciona espaçamento interno
    border-radius: 5px; // Bordas arredondadas
    max-height: 80vh; // Limita a altura máxima para 80% da altura da janela de visualização
    overflow-y: auto; // Habilita rolagem vertical se o conteúdo exceder a altura máxima

    ul {
        padding: 0; // Remove o padding padrão da lista não ordenada
        margin-top: 30px; // Adiciona margem superior
        margin-bottom: 20px; // Adiciona margem inferior para criar espaço entre a lista e o próximo elemento
    }

    @media (max-width: 750px) {
        width: 95%; // Ajusta a largura para ocupar quase toda a tela em dispositivos menores
    }
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4); // Define uma borda cinza com opacidade para o campo de entrada
    border-radius: 5px; // Bordas arredondadas
    height: 40px; // Define a altura do campo de entrada
    width: 342px; // Define a largura do campo de entrada
    margin-right: 28px; // Adiciona espaço entre o campo de entrada e o próximo elemento
    padding-left: 10px; // Adiciona espaçamento interno à esquerda

    @media (max-width: 750px) {
        width: 50%; // Ajusta a largura em dispositivos menores
    }
`;

export const Button = styled.button`
    border-radius: 5px; // Bordas arredondadas
    height: 40px; // Altura do botão
    width: 130px; // Largura do botão
    background: #8052EC; // Cor de fundo roxa
    color: #FFFFFF; // Cor do texto branco
    font-weight: 900; // Texto em negrito
    font-size: 17px; // Tamanho da fonte
    line-height: 2px; // Altura da linha reduzida
    border: none; // Remove a borda padrão do botão
    text-align: center; // Centraliza o texto no botão
    cursor: pointer; // Aponta para indicar interatividade

    &:hover {
        opacity: 0.8; // Reduz a opacidade quando o botão está em foco (hover)
    }

    &:active {
        opacity: 0.6; // Reduz ainda mais a opacidade quando o botão é clicado
    }

    @media (max-width: 750px) {
        width: 40%; // Ajusta a largura em dispositivos menores
    }
`;

export const ListItem = styled.div`
    background: ${props => props.isFinished ? "#E8FF8B" : "#E4E4E4"}; // Define a cor de fundo com base no estado da tarefa: amarelo (#E8FF8B) para concluído e cinza claro (#E4E4E4) para não concluído
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2); // Adiciona sombra à caixa
    height: 50px; // Define a altura de cada item
    border-radius: 5px; // Bordas arredondadas
    display: flex; // Usa flexbox para alinhar os elementos filhos
    justify-content: space-between; // Distribui os elementos filhos igualmente com espaço entre eles
    align-items: center; // Centraliza verticalmente os elementos filhos
    margin-bottom: 20px; // Adiciona espaço inferior entre os itens
    padding: 0 10px; // Adiciona espaçamento interno horizontal

    li {
        list-style: none;  // Remove os marcadores padrão da lista
    }
`;

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer; // Indica que o ícone é interativo

    &:hover {
        opacity: 0.8; // Reduz a opacidade ao passar o mouse
    }

    &:active {
        opacity: 0.6; // Reduz ainda mais a opacidade ao clicar
    }
`;

export const Check = styled(FcCheckmark)`
    cursor: pointer; // Indica que o ícone é interativo

    &:hover {
        opacity: 0.8; // Reduz a opacidade ao passar o mouse
    }

    &:active {
        opacity: 0.6; // Reduz ainda mais a opacidade ao clicar
    }
`;

export const StartTitle = styled.h3`
    text-align: center;  // Centraliza o texto
`;