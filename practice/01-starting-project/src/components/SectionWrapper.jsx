import Section from "./Sectiom";

function SectionWrapper() {
    return (
        
        <Section title="소개" id="introduction" className="main-section">

            {/* children은 부모 컴포넌트가 자식 컴포넌트 내부에 넣는 모든 요소이다. */}
            <p>여기는 소개 섹션입니다.</p>
        </Section>
    );
}

export default SectionWrapper;