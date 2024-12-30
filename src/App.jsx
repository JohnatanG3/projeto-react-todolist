import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, TodoList, Input, Button, ListItem, Trash, Check, StartTitle } from './styles.js'

function App() {
  // Estado que armazena a lista de tarefas
  const [list, setList] = useState([]); // Lista inicial vazia
  // Estado que armazena o valor atual do campo de entrada
  const [task, setTask] = useState('');
  // Referência para o campo de entrada, útil para manipulação direta do DOM
  const inputRef = useRef(null); // Cria uma referência para o campo de entrada

  useEffect(() => {
    // Garante que o campo de entrada seja focado quando o componente for montado
    inputRef.current.focus();
  }, []); // Array de dependências vazio significa que será executado apenas uma vez, ao carregar o componente

  // Função chamada sempre que o valor do campo de entrada muda
  function inputChanged(event) {
    setTask(event.target.value); // Atualiza o estado com o valor do campo de entrada
  }

  // Adiciona uma nova tarefa à lista
  function buttonClicked() {
    if (task.trim()) { // Verifica se o campo não está vazio ou preenchido apenas com espaços
      setList([...list, { id: uuidv4(), task, finished: false }]); // Adiciona uma nova tarefa com ID único
      setTask(''); // Limpa o campo de entrada após adicionar a tarefa
      inputRef.current.focus(); // Foca novamente no campo de entrada para melhorar a usabilidade
    }
  }

  // Permite adicionar a tarefa pressionando Enter
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      buttonClicked();
    }
  }

  // Alterna o estado de finalização de uma tarefa
  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ));
    setList(newList); // Atualiza a lista com a tarefa alterada
  }

  // Remove uma tarefa da lista
  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !== id); // Filtra para excluir a tarefa com o ID correspondente
    setList(newList); // Atualiza a lista sem a tarefa excluída
  }

  return (
    <>
      <Container>
        <TodoList>
          {/* Campo de entrada para a tarefa */}
          <Input 
            ref={inputRef} // Atribui a referência criada ao campo de entrada
            onChange={inputChanged} // Chama a função sempre que o valor mudar
            autoFocus 
            type="text" 
            onKeyDown={handleKeyDown} // Permite adicionar a tarefa pressionando Enter
            value={task} // Controla o valor exibido no campo de entrada
            placeholder="O Que Tenho Para Fazer..." 
          />
          {/* Botão para adicionar uma nova tarefa */}
          <Button onClick={buttonClicked}>Adicionar</Button>
          <ul>
            {/* Verifica se há tarefas na lista */}
            {list.length > 0 ? (
              list.map(item => (
                <ListItem key={item.id} isFinished={item.finished}>
                  {/* Ícone para marcar como finalizada */}
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <span>{item.task}</span>
                  {/* Ícone para deletar a tarefa */}
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              // Exibe uma mensagem quando a lista está vazia
              <StartTitle>Não Há Itens na Lista</StartTitle>
            )}
          </ul>
        </TodoList>
      </Container>
    </>
  )
}

export default App;