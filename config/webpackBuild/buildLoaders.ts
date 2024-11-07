import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/, // Регулярные выражения для отлавливания
        use: 'ts-loader', // Используемый loader
        exclude: /node_modules/, // Исключаем из проверки node_modules
    }

    return [
        typescriptLoader
    ]
}