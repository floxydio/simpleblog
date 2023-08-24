import { For, createEffect, createSignal } from "solid-js";
import "./Main.css";

export default function Main() {
    const [data, setData] = createSignal([])

    createEffect(() => {
        fetch('https://mocki.io/v1/d4b32719-924c-44eb-8e95-f2f4cbda7674')
        .then(response => response.json())
        .then(json => {
            setData(json.data)
            console.log(json.data)
        })
    })

  return (
    <>
        <div className="main__body">
        <For each={data()}>
                {(item,i) => <div className="card">
                    <h2 className="card_title">{item.title}</h2>  
                    <div innerHTML={item.body}>
                       
                    </div>
                </div>}
            </For>

        </div>
    </>
  )
}
