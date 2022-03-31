import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import classes from "./App.module.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const themeSwitchHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`${isDarkTheme ? classes.dark : classes.light}`}>
      <Navbar themeSwitcher={themeSwitchHandler} />
      <Header theme={isDarkTheme ? "dark" : "light"} />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
      tenetur eaque veniam fuga ex, autem aperiam sed dolorem nemo aliquam
      quibusdam odio rerum commodi non voluptatum! Reiciendis saepe ex expedita.
      Maiores culpa molestias, placeat impedit ut fugit dolorem magni laudantium
      architecto natus nemo unde enim exercitationem amet laboriosam veniam fuga
      doloremque odio recusandae praesentium deserunt nam aperiam aspernatur
      dicta? Quidem! Ea officiis doloremque ipsum, voluptas reiciendis labore et
      odit at nam maiores fugiat quidem rerum nisi. Ipsum dignissimos at dolorem
      obcaecati nam. Aperiam non doloribus dolores assumenda hic similique iure!
      Ullam iure, rerum eius corporis, veniam eligendi dolorem quaerat
      asperiores deserunt illum ratione, officia eveniet fugiat laborum non
      sequi nesciunt reprehenderit ipsa nemo repellendus doloribus voluptate.
      Minus exercitationem autem consequuntur! Ipsa facere quibusdam est,
      tenetur eius ea alias fuga repellendus delectus qui ex deleniti molestias
      aut perspiciatis consectetur tempore laborum. Dolores cupiditate ipsum
      inventore minus placeat soluta sed quam pariatur? Perferendis totam
      ratione, provident ducimus eveniet possimus eius similique sunt
      consequuntur dolorem quo enim excepturi omnis facilis aliquam molestiae,
      eaque cupiditate animi aut iusto deserunt, earum illo tempora. Ducimus,
      modi. Facere reprehenderit sit sunt fugiat quis eligendi magni
      perspiciatis nostrum iste totam praesentium assumenda impedit eum harum
      quidem dignissimos at ut, deleniti asperiores perferendis exercitationem
      consectetur illo inventore fuga? Dicta. Rerum quod eveniet necessitatibus
      enim corrupti exercitationem iste libero mollitia ratione, odit sit ea
      dolorum voluptatum consequatur nesciunt, esse dicta impedit error quos.
      Sed veritatis voluptatibus eaque molestiae labore obcaecati. Maxime
      deserunt corrupti, placeat saepe facere laudantium cupiditate esse.
      Sapiente laboriosam recusandae esse dolor perferendis ipsam totam itaque,
      porro voluptas iure quasi nihil dolores perspiciatis. Suscipit cumque cum
      impedit fugit? Ea voluptatibus at temporibus, consectetur perspiciatis
      architecto veritatis, minus enim repellendus animi explicabo aut
      necessitatibus eos minima. Itaque dignissimos expedita sapiente dolore
      nisi perferendis vero, et rem mollitia facere similique. Tempora culpa
      odit optio animi corporis, cum iusto id, odio veniam quis tempore sit
      incidunt, error reiciendis similique dignissimos. Incidunt deleniti eaque
      ipsam explicabo magni nulla quisquam, minima aut. At? Quia odit enim
      nostrum magnam exercitationem perspiciatis in numquam molestias iure ad
      vel nesciunt, cupiditate corporis alias iste eos tempore ducimus dolorem
      placeat facilis quibusdam? Eveniet inventore fugiat natus velit? Quos
      officiis reiciendis possimus aut perferendis quia asperiores laudantium
      quis, doloribus harum praesentium id velit impedit eveniet quam?
      Perferendis maiores et corrupti numquam quis aliquam cum saepe illum neque
      eveniet? Est facere dolor, porro ex veniam animi quibusdam. Iste
      blanditiis ducimus, laborum labore fuga aperiam ex atque quisquam, earum
      distinctio impedit aliquam officia optio. Quam maiores facilis accusamus
      minima reprehenderit? Impedit vero molestiae architecto magnam temporibus
      officia minus tempore soluta incidunt possimus, maiores nesciunt modi
      rerum animi deserunt repellat harum quibusdam error assumenda similique
      ipsa commodi ratione nam! Vel, quis! Incidunt, corrupti? Adipisci ducimus
      minus quo natus maxime nulla tempora repellendus impedit, porro cumque
      dolore odit earum temporibus. Ipsam ab laborum consequatur expedita
      aperiam deserunt laudantium perspiciatis? Ex, blanditiis nulla! Totam
      dignissimos neque inventore, beatae eius labore deleniti et at? Explicabo
      magni et cumque mollitia nulla ipsam accusantium amet modi inventore,
      exercitationem, velit error natus, dolorum voluptas eaque? Fugiat, iusto.
      Omnis nisi ullam animi aperiam neque? Autem ullam eveniet enim ducimus,
      eius magni doloribus impedit sint ratione beatae. Voluptatem consequatur
      doloribus dicta velit placeat deleniti totam commodi laboriosam laborum
      impedit. Excepturi itaque eligendi necessitatibus veniam. Asperiores
      voluptatem blanditiis ab pariatur? Eveniet provident nemo illum
      consequatur nisi. Quia sed fuga cum quam eum, commodi sit atque porro
      blanditiis sequi reiciendis mollitia? Fugiat rerum doloremque dolore
      perferendis voluptas quibusdam repudiandae dolores consequatur, quidem
      accusamus architecto natus praesentium laboriosam ratione optio, quisquam
      veritatis iure ex dignissimos! Possimus ea eos porro maiores. Molestiae,
      aliquam? Doloremque aut id suscipit quam error exercitationem excepturi
      non sunt quo, obcaecati commodi vel deserunt aliquam sed ex, in dicta?
      Aperiam, quidem. Aut, officiis? Pariatur ducimus consequatur ad numquam
      deleniti. Voluptatem nesciunt id similique quidem reiciendis molestias
      vitae magni impedit aliquam nobis praesentium, illum adipisci
      reprehenderit nostrum doloremque corporis rem hic ab quos odio. Amet
      dolorem cupiditate illo non unde? Esse ea asperiores eius a odio aperiam
      eligendi beatae architecto ullam, iusto labore reiciendis ad debitis
      similique dicta porro cum maxime voluptates nihil quidem error id
      molestiae, nostrum laboriosam. Voluptates. Exercitationem, expedita
      dolorum iusto odit dignissimos itaque sequi eum? Laboriosam est quia culpa
      impedit perspiciatis. Veritatis id facere cumque numquam ea nobis, quos
      iusto corrupti? Esse in ipsum veniam quo! Tempore quisquam repellat
      quidem, harum quo molestiae eligendi, optio ratione tenetur tempora nam a
      amet maiores recusandae? Rem facere quis distinctio culpa sed error?
      Veritatis, cum! Eos rem corrupti iste? Assumenda nesciunt voluptatum
      similique sed nobis libero, minus aliquid dignissimos fugit illum
      consequatur porro nisi harum. Hic, maiores. Maiores a praesentium
      repudiandae quisquam! Est animi voluptatibus labore maxime velit libero.
      Officiis quam minus labore impedit dicta, non totam placeat eveniet
      exercitationem, nihil tempore molestiae enim iusto consequuntur rerum
      molestias harum sunt rem quo doloremque ipsam est ab sequi dolorum.
      Assumenda? Consequuntur, eum maxime! Dignissimos quis est autem excepturi
      voluptas recusandae reiciendis in neque ratione impedit, repellat placeat
      quaerat et! Laborum eius ut consequatur enim aliquid. Eos iste saepe
      soluta aut. Harum illum dolorum ea! Tempore error perspiciatis asperiores
      nobis, repellat fugiat at? Sunt, nihil! Sapiente quisquam voluptatum vel
      et. Ipsam magni deleniti est at doloribus, rerum qui velit ut pariatur.
      Optio explicabo consectetur rem neque ut blanditiis possimus libero! Iusto
      numquam pariatur possimus similique tenetur excepturi necessitatibus nobis
      vel aliquid voluptas. Consequuntur cum aliquid excepturi harum aut.
      Consequuntur, adipisci similique? Dolorem saepe similique ducimus animi
      nesciunt porro non maiores consequuntur cupiditate necessitatibus. Numquam
      nulla quidem magnam ut vitae similique ipsa culpa autem inventore minima,
      ex suscipit voluptatibus. Nostrum, alias illo? Saepe quia similique quod
      velit qui totam repudiandae consequuntur ratione debitis expedita
      molestiae suscipit autem dolore doloribus labore officiis, ullam est
      inventore sit rerum alias. Incidunt eum maiores libero quasi. Sequi
      tenetur totam iure illum porro recusandae eaque neque debitis labore
      officiis deleniti, cumque, ab nobis soluta, animi impedit! Omnis quis
      dolore nisi ipsam eligendi, hic quam veritatis commodi quo? Illum quis
      ratione ab dolore ipsam magnam iure similique minima dicta illo, mollitia
      vero dolores adipisci, eius praesentium vitae? Voluptatem ut fugit
      architecto ipsum earum harum error aspernatur quia nostrum! Eaque odit
      assumenda laborum quod suscipit voluptatibus sed expedita doloribus itaque
      corporis neque temporibus ex excepturi, quo corrupti tempore quasi maiores
      veniam, doloremque ducimus ab vel fugiat? Quia, explicabo. Harum? In,
      doloremque laudantium nesciunt ipsum consectetur ut sit esse corrupti
      sequi molestias quos odio! Quisquam at excepturi harum fuga eveniet,
      tempore vitae ea iure praesentium asperiores molestiae, mollitia obcaecati
      illo. Placeat reiciendis voluptatibus nemo quo modi dolorem eveniet, vitae
      exercitationem suscipit velit rem incidunt enim, natus harum repellat
      temporibus dignissimos asperiores esse commodi soluta unde a fugiat.
      Minima, aspernatur porro. Similique voluptatibus, et, nulla, eum fugit ea
      illo cupiditate esse debitis odit dicta nostrum incidunt molestiae sint
      consectetur? Deserunt ea molestias quibusdam quasi accusamus cupiditate
      laboriosam esse mollitia debitis eum! Aut necessitatibus voluptates dolor
      sit rem voluptas perferendis eveniet quas. Dignissimos veritatis corporis
      recusandae possimus maxime architecto neque impedit temporibus velit,
      ullam officia, eaque sit, laudantium nam qui inventore placeat. Non totam
      tenetur pariatur aliquid corporis, tempora accusamus cupiditate velit
      deserunt omnis est, ullam facilis voluptates deleniti dolor. Quas quidem
      temporibus quis asperiores impedit minus, nesciunt corrupti voluptate
      cumque eaque?
    </div>
  );
}

export default App;
