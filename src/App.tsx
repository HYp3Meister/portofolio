import { Container, Card, Button } from './components/ui'

function App() {

  return (
    <Container>
      <Card>
        <h2>My Project</h2>
        <Button>View</Button>
        <Button $variant="ghost">Cancel</Button>
      </Card>
    </Container>
  )
}

export default App
