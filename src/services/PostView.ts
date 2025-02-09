
import { Ref, ref } from "vue"
import IPostView from "@/interfaces/IPostView"

class PostView {

    private posts:Ref<Array<IPostView>>
    private post:Ref<IPostView>

    constructor() {
        this.posts = ref<Array<IPostView>>([])
        this.post = ref<IPostView>({})
    }

    getPosts ():Ref<Array<IPostView>> {
        return this.posts
    }

    getPost ():Ref<IPostView> {
        return this.post
    }

    async fetchAll(): Promise<void> {
        try {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            this.posts.value = await data

        } catch (error) {
            console.log(error);
            
        }
    }

    async fetchById(id: string | Array<string>): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const data = await response.json()

            this.post.value = await data

        } catch (error) {
            console.log(error);
        }
    }
}

export default PostView