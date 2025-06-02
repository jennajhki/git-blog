import Sidebar from '../components/Sidebar';
const Profile = () => {
  return (
    <div>
      <Sidebar />
      <section style={{ marginTop: '56px', padding: '2rem' }}>
        <h1>👩‍💻 내 프로필</h1>
        <p>안녕하세요! 저는 블록체인 서비스 개발을 꿈꾸는 예비 개발자입니다.</p>
        <p>현재 React와 TypeScript, Javascript를 중심으로 한 웹 개발을 공부하고 있으며,</p>
        <p>이 블로그는 저의 학습, 일상, 그리고 생각들을 정리하는 공간입니다.</p>
        <p>디자인과 사용자 경험에도 관심이 많고, 꾸준히 성장하며 더 나은 개발자가 되고 싶습니다.</p>
        <p style={{ marginTop: '1rem' }}>
          웹개발 블로그 🌐 {" "}
          <a
            href="https://jennajhki.github.io/blog/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#6a4dad', textDecoration: 'underline' }}
          >
            jennajhki.github.io/blog
          </a>
        </p>
      </section>
    </div>
  );
};

export default Profile;