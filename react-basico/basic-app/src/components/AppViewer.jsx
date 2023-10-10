import styles from './AppViewer.module.css'
<<<<<<< HEAD
//camada de compilação de serviços
function somaNumero(n1,n2){
    return (n1+n2)
}
const AppViewer = () => {
    //retorno no display
  return (
    <>
    <div className={styles.avContainer}>AppViewer</div>
    <p>
        {somaNumero(5,17)}
    </p>
    </>
    
  )
}

export default AppViewer
=======
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
>>>>>>> f1699e6261a0c2d5ae4cb6cd6b2344ab46007aff
