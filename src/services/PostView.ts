
import { Ref, ref } from "vue"
import IPostView from "@/interfaces/IPostView"

class PostView {

    private posts:Ref<Array<IPostView>>

    constructor() {
        this.posts = ref<Array<IPostView>>([])
    }

    getPosts ():Ref<Array<IPostView>> {
        return this.posts
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
}

export default PostView