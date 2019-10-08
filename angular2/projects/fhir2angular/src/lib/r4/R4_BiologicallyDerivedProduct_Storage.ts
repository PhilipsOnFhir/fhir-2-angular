import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_BiologicallyDerivedProductStorageScaleEnum } from './R4_BiologicallyDerivedProductStorageScaleEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_BiologicallyDerivedProduct_Storage      extends R4_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Storage';
   description : string ;
   temperature : string ;
   scale : R4_BiologicallyDerivedProductStorageScaleEnum ;
   duration : R4_Period ;
}
