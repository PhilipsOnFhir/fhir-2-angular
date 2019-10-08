import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_BiologicallyDerivedProduct_Collection      extends R5_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Collection';
   collector : R5_Reference ;
   source : R5_Reference ;
   collectedDateTime : string ;
   collectedPeriod : R5_Period ;
}
