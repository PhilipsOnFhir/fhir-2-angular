import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_BiologicallyDerivedProductStorageScaleEnum } from './R4_1_BiologicallyDerivedProductStorageScaleEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_BiologicallyDerivedProduct_Storage      extends R4_1_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Storage';
   description : string ;
   temperature : string ;
   scale : R4_1_BiologicallyDerivedProductStorageScaleEnum ;
   duration : R4_1_Period ;
}
