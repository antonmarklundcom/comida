import fs from 'node:fs';
export function webpSize(file){
 const b=fs.readFileSync(file);if(b.toString('ascii',0,4)!=='RIFF'||b.toString('ascii',8,12)!=='WEBP')throw Error('Invalid WebP');
 for(let p=12;p+8<b.length;){const type=b.toString('ascii',p,p+4),n=b.readUInt32LE(p+4),s=p+8;
  if(type==='VP8X')return {width:1+b.readUIntLE(s+4,3),height:1+b.readUIntLE(s+7,3)};
  if(type==='VP8 ')return {width:b.readUInt16LE(s+6)&16383,height:b.readUInt16LE(s+8)&16383};
  if(type==='VP8L'){const x=b.readUInt32LE(s+1);return {width:(x&16383)+1,height:((x>>>14)&16383)+1}}
  p=s+n+(n%2);
 }throw Error('WebP dimensions unavailable');
}
