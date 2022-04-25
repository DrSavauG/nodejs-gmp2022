import process from 'process';

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const input: string = process.stdin.read();
    const output: string = input.split('').reverse().join('');
    process.stdout.write(output);
    process.stdout.write('\n');
});
