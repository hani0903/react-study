// 컴포넌트 분리
import Header from'./components/Header/Header.jsx';
import TodoApp from'./components/Todo/TodoApp.jsx';
import React from 'react';

function App() {
    return (
        <div>
            <Header />
            <main>
                <TodoApp/>
            </main>
        </div>
    );
}

export default App;