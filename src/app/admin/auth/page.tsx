export default function auth(){
    return(
        <section>
            <div>
                <form method="post" encType="">
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                    <input type="submit" placeholder="Login" />
                </form>
            </div>
        </section>
    )
}