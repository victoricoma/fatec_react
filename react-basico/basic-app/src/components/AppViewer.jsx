import styles from './AppViewer.module.css'
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
