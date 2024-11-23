import { PromiseExecutor } from '@nx/devkit';
import { GenerateTypesExecutorSchema } from './schema';
import { exec } from 'child_process';
import { promisify } from 'util';

const runExecutor: PromiseExecutor<GenerateTypesExecutorSchema> = async (options) => {
    const { schema, output } = options;
    console.debug('Running executor with options:', options);

    if (!schema || !output) {
        throw new Error('Both schema and output options are required.');
    }

    try {
        const command = `npx openapi-typescript ${schema} -o ${output}`;
        console.log(`Running command: ${command}`);
        const result = await promisify(exec)(command);

        if (result.stderr) console.error(result.stderr);

        return { success: true };
    } catch (error) {
        console.error('Error generating types:', error);
        return { success: false };
    }
};

export default runExecutor;
