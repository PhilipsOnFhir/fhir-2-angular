import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_BiologicallyDerivedProduct_Manipulation      extends R5_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Manipulation';
   description : string ;
   timeDateTime : string ;
   timePeriod : R5_Period ;
}
