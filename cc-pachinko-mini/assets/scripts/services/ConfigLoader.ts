import { resources, JsonAsset } from 'cc';

export class ConfigLoader {
\tstatic loadJSON<T>(path: string): Promise<T> {
\t\treturn new Promise((resolve, reject) => {
\t\t\tresources.load(path, JsonAsset, (err, asset) => {
\t\t\t\tif (err) {
\t\t\t\t\treject(err);
\t\t\t\t\treturn;
\t\t\t\t}
\t\t\t\ttry {
\t\t\t\t\tconst data = (asset.json || (asset as any).data) as T;
\t\t\t\t\tresolve(data);
\t\t\t\t} catch (e) {
\t\t\t\t\treject(e);
\t\t\t\t}
\t\t\t});
\t\t});
\t}
}

