import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_BiologicallyDerivedProductStorageScaleEnum } from './R5_BiologicallyDerivedProductStorageScaleEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_BiologicallyDerivedProduct_Storage      extends R5_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Storage';
   description : string ;
   temperature : string ;
   scale : R5_BiologicallyDerivedProductStorageScaleEnum ;
   duration : R5_Period ;
}
