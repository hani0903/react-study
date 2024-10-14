//자식 컴포넌트가 부모로부터 받은 props를 수정할 수 없으며 오직 읽을 수만 있다
//스프레드 연산자의 사용: 모든 props를 명시적으로 나열하지 않고 컴포넌트를 통해 자식에게 props를 전달
export default function Section({ title, children, ...props }) {
    return (
        // props 객체에 저장된 모든 키-값 쌍을 한 번에 section 태그의 속성으로 추가할 수 있다.
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
