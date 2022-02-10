import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Goodmotion 2022</title>
      </Head>
      <main className="flex flex-col items-center justify-center mx-auto prose lg:prose-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec hoc ille
          non vidit, sed verborum magnificentia est et gloria delectatus. Iubet
          igitur nos Pythius Apollo noscere nosmet ipsos. Itaque vides, quo modo
          loquantur, nova verba fingunt, deserunt usitata. An dolor longissimus
          quisque miserrimus, voluptatem non optabiliorem diuturnitas facit? Est
          autem etiam actio quaedam corporis, quae motus et status naturae
          congruentis tenet; Quod autem magnum dolorem brevem, longinquum levem
          esse dicitis, id non intellego quale sit. Duo Reges: constructio
          interrete. Ut id aliis narrare gestiant? Sed vos squalidius, illorum
          vides quam niteat oratio. Hanc quoque iucunditatem, si vis, transfer
          in animum;
        </p>
      </main>
    </div>
  );
};

export default Home;
