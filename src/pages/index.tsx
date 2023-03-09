import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$rockeseat",
  borderRadius: 4,
  padding: '4px 8px',
  border: 0,
  
  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      <span>Enviar</span>
    </Button>
  )
}
