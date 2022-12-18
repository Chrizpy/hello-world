import { tw } from "twind";
//
// import {
//     Bson,
//     MongoClient,
//   } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
//
import Head from "../components/Head.tsx";
import SocialNav from "../components/SocialNav.tsx";
import Navigation from "../components/Navigation.tsx";
import Thumbnail from "../components/Thumbnail.tsx";

// interface PostSchema {
//     _id: Bson.ObjectId;
//     content: string;
//   }
//
// const client = new MongoClient();
//
// await client.connect("mongodb://root:example@127.0.0.1:27017");
// const db = client.database("blogDB");
// const posts = db.collection<PostSchema>("posts");
// const findResult = await posts.find({}).toArray();

export default function Blog() {
  return (
    <div>
      <Head />
      <div id="content" class={tw`max-w-6xl mx-auto font-nanum`}>
        <SocialNav />
        <div class={tw`grid grid-cols-3 m-5`}>
          <div class={tw`col-span-3 sm:col-span-1`}>
            <Navigation />
          </div>

          <div class={tw`col-span-3 sm:col-span-2`}>
            Welcome to my blog!
            <div class={tw`grid grid-cols-2 m-5 gap-5 h-96`}>
              <Thumbnail title="Hello World!" date={new Date("2022-09-10")} route="hello-world">
                Hello World! This is my first blog post.
              </Thumbnail>
              <Thumbnail
                title="Croatia, Infobip shift 2022 and more!"
                date={new Date("2022-09-10")}
                route="croatia-infobip-shift-2022-and-more"
              >
                Hello World! This is my first blog post. Hello World! This is my
                first blog post. Hello World! This is my first blog post. Hello
                World! This is my first blog post. Hello World! This is my first
                blog post.
              </Thumbnail>
              <Thumbnail title="Hello World!" date={new Date("2022-09-10")} route="hello-world">
                Hello World! This is my first blog post.
              </Thumbnail>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
