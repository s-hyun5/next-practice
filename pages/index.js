export default function Home({posts}) {

    console.log(posts)
  return (
    <div>
      <h1>Welcome to My Blog</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}


//해당 페이지에 들어올 때마다 서버에 요청을 해서 데이터를 받아옴
//서버에서 만든 html 파일을 그때그때 보여주는 방식
//서버에서 데이터가 바뀌었을 때 즉각적으로 빈번한 데이터의 변화가 일어나는 페이지를 만들었을 때 serverSideProps를 사용하는게 바람직하다
// export const getServerSideProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
//     const posts = await res.json();
//
//     return {
//         props: {
//             posts
//         }
//     }
// }


//Static Generation이 일어남
//Next.js에서 추천하는
//이미 조회를 해서 생성되어 있는 html을 보여주는 방식
//이런 부분을 처리하기 위함 -> 인크리먼트 static regenerate
//페이지가 실시간으로 데이터를 확인할 필요가 없다면 해당 방식을 사용하는 것이 더 빠른 랜더링과 처리 방식을 보여줄 수 있음
//빌드를 할 때마다 페이지가 새로 갱신됨
export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
    const posts = await res.json();

    return {
        props: {
            posts
        },
        //20초 지난 시험부터 언제든 접속이 일어나면 새롭게 데이터를 받아서 regeneration 시킬 수 있도록 하는 옵션
         revalidate: 20
    }
}

