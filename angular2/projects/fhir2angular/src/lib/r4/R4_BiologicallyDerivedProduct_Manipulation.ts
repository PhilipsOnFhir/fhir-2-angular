import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_BiologicallyDerivedProduct_Manipulation      extends R4_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Manipulation';
   description : string ;
   timeDateTime : string ;
   timePeriod : R4_Period ;
}
