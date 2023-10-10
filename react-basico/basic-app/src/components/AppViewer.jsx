import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços
const AppViewer = () => {
  //Retorno no display
  const professores = [
    { id: 1, nome: "José Armando Vargas", idade: 42, formacao: "Engenharia da Computação", titulacao: "Latu-Senso" },
    { id: 2, nome: "Ana Maria Silva", idade: 35, formacao: "Ciência da Computação", titulacao: "Mestrado" },
    { id: 3, nome: "Carlos Eduardo Santos", idade: 28, formacao: "Sistemas de Informação", titulacao: "Bacharelado" },
    { id: 4, nome: "Mariana Oliveira", idade: 29, formacao: "Engenharia Elétrica", titulacao: "Doutorado" },
    { id: 5, nome: "Luiz Felipe Mendes", idade: 45, formacao: "Engenharia de Software", titulacao: "Especialização" },
    { id: 6, nome: "Patrícia Costa", idade: 30, formacao: "Tecnologia da Informação", titulacao: "Pós-Graduação" },
    { id: 7, nome: "André Santos Pereira", idade: 38, formacao: "Engenharia Mecânica", titulacao: "Bacharelado" },
    { id: 8, nome: "Laura Souza", idade: 31, formacao: "Ciência de Dados", titulacao: "Mestrado" },
    { id: 9, nome: "Ricardo Alves", idade: 40, formacao: "Engenharia Química", titulacao: "Doutorado" }
  ]
  return (
    <>
      <h2>Lista de Professores</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Formação</th>
          <th>Titulação</th>
        </tr>
        {
          professores.map((professor) => {
            return (
              <tr className={professor.id % 2 ==1 ? styles.linhaCinza : null} key={professor.id}>
                <td>{professor.id}</td>
                <td>{professor.nome}</td>
                <td>{professor.idade}</td>
                <td>{professor.formacao}</td>
                <td className={
                  professor.titulacao=="Mestrado" || professor.titulacao=="Doutorado" ?
                  styles.superTitulo : styles.normalTitulo
                  }>{professor.titulacao}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default AppViewer