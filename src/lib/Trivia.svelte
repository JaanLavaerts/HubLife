<script>
    import { onMount } from "svelte";
    import { user } from "../store";
    import Spinner from "./icons/spinner.svelte";
    import Gamepad_2 from "./icons/gamepad-2.svelte";

    let category;
    let url;
    let triviaData;
    let answerStatus = {};
    let currentQuestionIndex = 0;

    user.subscribe((value) => {
        category = value.triviaCategory;
        url = `https://opentdb.com/api.php?amount=5&category=${category}&type=boolean`;
    });

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        triviaData = 
        data.results
        .filter(result => result.question.length <= 100)
        .map((result) => {
            result.question = replaceSpecialChars(result.question);
            result.correct_answer = replaceSpecialChars(result.correct_answer);
            result.incorrect_answers = result.incorrect_answers.map((answer) =>
                replaceSpecialChars(answer)
            );
            return result;
        });
        answerStatus = {};
        console.log(url);
    };

    onMount(fetchData);

    const replaceSpecialChars = (str) => {
        return str
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&amp;/g, "&")
            .replace(/&eacute;/g, "é")
            .replace(/&rsquo;/g, "'")
    };

    const checkAnswer = (answer) => {
    const isCorrect = answer === triviaData[currentQuestionIndex].correct_answer;
    answerStatus[answer] = isCorrect ? 'correct' : 'incorrect';

    setTimeout(() => {
        answerStatus[answer] = '';
        currentQuestionIndex++;

        if (currentQuestionIndex >= triviaData.length) {
        fetchData();
        currentQuestionIndex = 0;
        }
    }, 250);
    };

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        checkAnswer(event.target.innerText);
    }
    };


</script>

<main>
    {#if triviaData}
        <div class="flex flex-col justify-center items-center">
            <div class="text-base font-medium text-neutral-content text-center m-5">
                {triviaData[currentQuestionIndex].question}
            </div>
            <div class="stats stats-horizontal lg:stats-horizontal shadow">
                {#each ["True", "False"] as answer}
                    <div class="stat cursor-pointer {answerStatus[answer]}" on:keydown={handleKeyDown} on:click={() => checkAnswer(answer)}>
                        <button class="stat-value text-base font-normal">{answer}</button>
                    </div>
                {/each}
            </div>
        </div>
    {:else}
        <Spinner />
    {/if}
</main>

<style>
    .correct {
        background-color: green;
    }
    
    .incorrect {
        background-color: red;
    }
</style>
