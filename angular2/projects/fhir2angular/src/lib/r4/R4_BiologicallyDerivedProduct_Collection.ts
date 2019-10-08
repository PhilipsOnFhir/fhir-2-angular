import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_BiologicallyDerivedProduct_Collection      extends R4_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Collection';
   collector : R4_Reference ;
   source : R4_Reference ;
   collectedDateTime : string ;
   collectedPeriod : R4_Period ;
}
