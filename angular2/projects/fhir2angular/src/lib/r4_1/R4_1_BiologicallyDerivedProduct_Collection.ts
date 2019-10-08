import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_BiologicallyDerivedProduct_Collection      extends R4_1_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Collection';
   collector : R4_1_Reference ;
   source : R4_1_Reference ;
   collectedDateTime : string ;
   collectedPeriod : R4_1_Period ;
}
