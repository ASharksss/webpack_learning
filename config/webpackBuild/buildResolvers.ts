import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'] //Файлы, у которых при импорте не будем указывать расширение
    }
}