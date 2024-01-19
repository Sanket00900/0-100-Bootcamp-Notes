// import Header from "./components/Header";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import CardWrapper from "./components/CardWrapper";
import Header from "./components/Header";
import TodosWrapper from "./components/TodosWrapper";

function App() {
  return (
    <div>
      {/*<Header initialTitle="Hello from Header" />*/}

      {/*
      <CardWrapper>
        <Card1 />
      </CardWrapper>
      <CardWrapper>
        <Card2 />
      </CardWrapper>
      <CardWrapper>
        <Card1 />
        <Card2 />
      </CardWrapper>
    */}
      <TodosWrapper />
    </div>
  );
}

export default App;
