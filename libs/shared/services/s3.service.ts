import {Injectable} from '@angular/core';

import {ManagedUpload} from 'aws-sdk/clients/s3';

import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import {UploadResponse} from 'aws-s3-upload-ash/dist/types';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  // private s3: S3;

  bucketName = 'cardpie-resource';

  constructor() {
    // this.s3 = new S3({
    //   accessKeyId: 'AKIAZYEGSXM5422FKFET',
    //   secretAccessKey: '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',
    //   region: 'ap-southeast-1',
    // });
  }
  config = {
    bucketName: 'cardpie-resource',
    region: 'ap-southeast-1',
    accessKeyId: 'AKIAZYEGSXM5422FKFET',
    secretAccessKey: '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',
    s3Url: 'https://cardpie-resource.s3.amazonaws.com/',
  };
  S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);

  async uploadFileToS3(file: File) {
    const data = await this.S3CustomClient.uploadFile(
      file,
      file.type,
      undefined,
      file.name,
      'public-read',
    )
      .then((data: UploadResponse) => data)
      .catch((err: any) => console.error(err));
    return data;
  }
}
