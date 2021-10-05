import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Header from './components/Header'
import Jobs from './components/Jobs';


const Container = styled.div`


`

function App() {

    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <Jobs />
            </Container>
        </>
    )
}

export default App
