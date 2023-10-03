import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços
function somaNumero(n1, n2){
  return(n1+n2)
}
const AppViewer = () => {
  //Retorno no display
  return (
    <>
      <div className={somaNumero(2, 2) >10 ? console.log("Bunda"): console.log("Beiço")}>AppViewer</div>
    </>
  )
}

export default AppViewer