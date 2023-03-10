interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps){
    return (
        <div className="bg-purple-500 w-10 h-10 text-white rounded text-center m2 flex items-center justify-center">
            {props.completed}</div>
    )
}