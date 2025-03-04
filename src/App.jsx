import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography
} from "@mui/material";

const listQuotes = [
  {
    quote:
      "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    author: "John Lennon",
  },
  {
    quote: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
    author: "Winston Churchill",
  },
  {
    quote: "No cuentes los días, haz que los días cuenten.",
    author: "Muhammad Ali",
  },
  {
    quote: "La imaginación es más importante que el conocimiento.",
    author: "Albert Einstein",
  },
  { quote: "Haz de cada día tu obra maestra.", author: "John Wooden" },
  {
    quote: "Cree que puedes y ya estás a medio camino.",
    author: "Theodore Roosevelt",
  },
];

export default function App() {
  const [quotes, setQuotes] = useState(listQuotes[0]);

  function updateQuotes() {
    setQuotes(listQuotes[Math.floor(Math.random() * (listQuotes.length - 1))]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateQuotes();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container style={{minWidth: '65vw'}}>
        <Typography variant="h3">Quote Generator</Typography>
        <Card
          style={{
            width: "100%",
            boxShadow:
              "0px 6px 18px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
          }}
          className="card-quote"
        >
          <CardContent>
            <Typography variant="h6" sx={{ mt: 2 }}>
              "{quotes.quote}"
            </Typography>
            <Typography variant="body1" color="text.secondary">
              - {quotes.author}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button variant="contained" sx={{ mt: 2 }} onClick={updateQuotes}>
              New Quote
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}