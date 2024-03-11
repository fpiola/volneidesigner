import Head from 'next/head'
import data from '@data/data.json';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
          <title>{data.head.title}</title>
          <meta name="keywords" content={data.head.keywords} />
          <meta name="author" content="" />
          <meta name="description" content={data.head.description} />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image src={data.profileImage.src} width={data.profileImage.width} height={data.profileImage.height} loading="lazy" className='logo' alt={data.profileImage.alt} />
        <h2 style={{ color: data.profileText.color }}>{data.profileText.text}</h2>
        <div className="social_icons">
          {
            data.icons.map((item) => (
              <a key={item.id} href={item.href} target="_blank"><i className={item.iconName}></i></a>
            ))
          }
        </div>
      </header>

      <main>
        <main>
          {data.images.map(({ id, src, alt, href, width, height }) => (
            <div className="image" key={id}>
              <a href={href} target="_blank">
                <Image src={src} width={width} height={height} className='img' loading="lazy" alt={alt} />
              </a>
            </div>
          ))}
        </main>
      </main>

      <footer style={{ backgroundColor: data.footer.background }}>
        <p style={{ color: data.footer.color }}>{data.footer.text}</p>
      </footer>
    </div>
  )
}
